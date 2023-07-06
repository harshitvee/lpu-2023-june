import { useState, useEffect } from "react";
import { supabase } from "../config/supabase";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
export default function Profile() {
    const { session } = useAuth();
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);

    useEffect(() => {
        async function getProfile() {
            setLoading(true);
            const { user } = session;

            let { data, error } = await supabase
                .from("profiles")
                .select(`first_name, last_name, username, phone, address`)
                .eq("id", user.id)
                .single();

            if (error) {
                console.warn(error);
            } else if (data) {
                setUsername(data.username);
                setFirstName(data.first_name);
                setLastName(data.last_name);
                setPhone(data.phone);
                setAddress(data.address);
            }

            setLoading(false);
        }

        getProfile();
    }, [session]);

    async function updateProfile(event) {
        event.preventDefault();

        setLoading(true);
        const { user } = session;

        const updates = {
            id: user.id,
            username: username,
            first_name: firstName,
            last_name: lastName,
            phone: phone,
            address: address,
            updated_at: new Date(),
        };

        let { error } = await supabase.from("profiles").upsert(updates);

        if (error) {
            alert(error.message);
        }
        setLoading(false);
    }
    if (!session) {
        return <Link to="/login">Login</Link>;
    }
    return (
        <form onSubmit={updateProfile} className="form-widget">
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="text"
                    value={session.user.email}
                    disabled
                />
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    required
                    value={username || ""}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="firstName">firstName</label>
                <input
                    id="firstName"
                    type="text"
                    value={firstName || ""}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="lastName">lastName</label>
                <input
                    id="lastName"
                    type="text"
                    value={lastName || ""}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="phone">phone</label>
                <input
                    id="phone"
                    type="tel"
                    value={phone || ""}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="address">address</label>
                <input
                    id="address"
                    type="text"
                    value={address || ""}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>

            <div>
                <button
                    className="button block primary"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Loading ..." : "Update"}
                </button>
            </div>

            <div>
                <button
                    className="button block"
                    type="button"
                    onClick={() => supabase.auth.signOut()}
                >
                    Sign Out
                </button>
            </div>
        </form>
    );
}
