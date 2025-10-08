import React, { useState } from "react";
import "./languageselector.css";

const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "zh", name: "Chinese" },
    { code: "ja", name: "Japanese" },
    { code: "ru", name: "Russian" },
    { code: "ar", name: "Arabic" },
    { code: "hi", name: "Hindi" },
];

const LanguageSelector = ({ onSelect }) => {
    const [ngoLang, setNgoLang] = useState("en");
    const [refugeeLang, setRefugeeLang] = useState("ar");
    const [suggestedNgo, setSuggestedNgo] = useState({ name: "Jamal", flag: "🇫🇷" });
    const [suggestedRefugee, setSuggestedRefugee] = useState({ name: "Amina", flag: "🇫🇷" });
    const [frenchToggle, setFrenchToggle] = useState(true);

    const handleNgoChange = (e) => {
        setNgoLang(e.target.value);
        if (onSelect) onSelect(e.target.value, refugeeLang);
    };

    const handleRefugeeChange = (e) => {
        setRefugeeLang(e.target.value);
        if (onSelect) onSelect(ngoLang, e.target.value);
    };

    const handleFrenchToggle = () => {
        setFrenchToggle((prev) => !prev);
    };

    return (
        <div className="language-selector-ui">
            {/* NGO Language Panel */}
            <div className="language-panel">
                <h2 className="panel-title">Select Languages</h2>
                <div className="input-group">
                    <span className="label-blue">Select NGO Language</span>
                    <select value={ngoLang} onChange={handleNgoChange} className="dropdown">
                        {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>{lang.name}</option>
                        ))}
                    </select>
                </div>
                <div className="input-group">
                    <span className="label-red">Suggested Pairings</span>
                    <button className="button-client-call">Call to Client</button>
                    
                </div>
                <button className="button-red">Proceed to Call</button>
                <div className="suggested-pairing">
                    <span>{suggestedNgo.flag}</span>
                    <span className="bold-text">{suggestedNgo.name}</span>
                    <span className="label-red">–</span>
                    <span className="bold-text label-red">{suggestedRefugee.name}</span>
                    <span className="arrow">&gt;</span>
                </div>
            </div>

            {/* Refugee Language Panel */}
            <div className="language-panel">
                <h2 className="panel-title">Select Languages</h2>
                <div className="input-group">
                    <span className="label-blue">Select Refugee Language</span>
                    <select value={refugeeLang} onChange={handleRefugeeChange} className="dropdown">
                        {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>{lang.name}</option>
                        ))}
                    </select>
                </div>
                <div className="input-group">
                    <span className="label-red">Suggested Pairings</span>
                </div>
                <div className="suggested-pairing">
                    <span className="suggestion-circle">F</span>
                    <span className="bold-text">French</span>
                    <label className="checkbox-label">
                        <input type="checkbox" checked={frenchToggle} onChange={handleFrenchToggle} className="checkbox" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;
