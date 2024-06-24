import React from "react"

export default function Hero() {
    return (
        <section className="hero">
            <img src="../images/photo-grid.png" className="hero--photo" />
            <div>
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts</p>
                <p className="hero--text">—all without leaving home.</p>
            </div>
        </section>
    )
}