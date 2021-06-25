import React from "react";
import SearchInput from "./SearchInput";
import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-title">Find Movies</div>
                <SearchInput />
            </div>
                
        </header>
    );
}
