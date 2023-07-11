import React from "react";

function DemoUseMemo({ names }) {
    return (
        <div>
            DemoUseMemo,
            {names.map((name) => (
                <p key={name}>{name}</p>
            ))}
        </div>
    );
}

export default React.memo(DemoUseMemo);
