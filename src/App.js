import React from 'react';
import './styles.css';

function App() {
    return (
        <div className="portfolio-container">
            <header className="portfolio-header">
                <h1>Pree Portfolio</h1>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>

            <main className="portfolio-main">
                <section className="hero-section">
                    <h2>Welcome to My Portfolio</h2>
                    <p>Full Stack Developer | Creative Problem Solver</p>
                </section>

                <section className="projects-section">
                    <h3>Featured Projects</h3>
                    <div className="project-grid">
                        {/* Project cards will go here */}
                    </div>
                </section>

                <section className="skills-section">
                    <h3>Skills</h3>
                    <div className="skills-grid">
                        {/* Skills list will go here */}
                    </div>
                </section>
            </main>

            <footer className="portfolio-footer">
                <p>© 2024 Pree Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
