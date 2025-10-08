import React from "react";
import "./callhistory.css";

const callHistoryData = [
    {
        id: 1,
        icon: "F",
        iconColor: "#1976d2",
        text: "Prech and",
        time: "9:15 AM",
        isBox: true,
    },
    {
        id: 2,
        flag: "🇺🇸",
        from: "English",
        to: "Arabic",
        date: "Apr. 21",
    },
    {
        id: 3,
        flag: "🇪🇹",
        from: "Somali",
        to: "Dari",
        date: "Apr. 19",
    },
    {
        id: 4,
        flag: "🇪🇹",
        from: "Somali",
        to: "Tigrinya",
        date: "Apr. 19",
    },
    {
        id: 5,
        flag: "🇹🇷",
        from: "English",
        to: "Tygrlya",
        date: "Apr. 19",
    },
];

const CallHistory = () => (
    <div className="callhistory-container">
        {/* Call History Card */}
        <div className="callhistory-card">
            <div className="callhistory-header">
                <h2 className="callhistory-title">Call History</h2>
                <span className="menu-icon">&#9776;</span>
            </div>
            <div>
                {callHistoryData.map((item) =>
                    item.isBox ? (
                        <div key={item.id} className="call-box">
                            <div className="call-box-left">
                                <span
                                    className="call-icon"
                                    style={{ backgroundColor: item.iconColor }}
                                >
                                    {item.icon}
                                </span>
                                <span className="call-text-bold">{item.text}</span>
                            </div>
                            <span className="call-time">{item.time}</span>
                        </div>
                    ) : (
                        <div key={item.id} className="call-entry">
                            <div className="call-entry-left">
                                <span className="call-flag">{item.flag}</span>
                                <span className="call-text-bold">{item.from}</span>
                                <span className="call-dash">–</span>
                                <span className="call-text-red">{item.to}</span>
                            </div>
                            <span className="call-date">{item.date}</span>
                        </div>
                    )
                )}
            </div>
        </div>

    </div>
);

export default CallHistory;
