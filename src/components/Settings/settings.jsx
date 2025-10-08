import react from "react";
import "../CallHistory/callhistory.css";

const Settings = () => (
    <div className="settings-container">
        {/* Settings Card */}
        <div className="settings-card">
            <h2 className="callhistory-title">Settings</h2>
            <div className="settings-profile">
                <div className="profile-avatar">
                    <span className="profile-icon">&#128100;</span>
                </div>
                <div>
                    <div className="profile-name">Sarah</div>
                    <div className="profile-email">suraindexampia.org</div>
                </div>
            </div>

            <div className="settings-options">
                {["Profile", "Language Preferences", "Accessibility", "Notifications", "About"].map((item, idx) => (
                    <div key={idx} className="settings-item">
                        <span className="settings-label">{item}</span>
                        <span className="settings-arrow">&#8250;</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
export default Settings;