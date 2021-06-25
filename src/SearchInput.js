import React from "react";
import "./SearchInput.scss";

export default function SearchInput() {
    return (
        <div>
            <input className="search-input" type="text" placeholder="E.g. HarryPotter" />
        </div>
    );
}
