import React from "react";
import "../styles/CoverLetter.css";

class CoverLetter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPage: "",
            language: "english",
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        this.toggleLanguage = this.toggleLanguage.bind(this);
    }

    handlePageChange(selectedPage) {
        this.setState({ selectedPage });
        const element = document.getElementById(selectedPage);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    toggleLanguage() {
        this.setState((prevState) => ({
            language: prevState.language === "english" ? "french" : "english",
        }));
    }

    render() {
        const { language } = this.state;

        // Content for both languages
        const aboutMeContent = {
            english: (
                <div>
                    <p>To whom it may concern,</p>
                    <p>
                        My name is Céleste Duguay, and I’m a fourth-year Computer Science
                        student at the University of Ottawa, with a minor in{" "}
                        <a 
                            href="#digital-humanities" 
                            onClick={() => this.handlePageChange("digital-humanities")}
                            className="link"
                        >
                            Digital Humanities
                        </a>
                        . I’m passionate about leveraging my technical skills and
                        problem-solving abilities to create impactful solutions.
                    </p>
                    <p>
                        I have experience building prediction models, conducting data
                        analysis, and improving software usability. In my current role as an
                        IT Consultant, I coordinate with stakeholders, lead contract renewal
                        discussions, and streamline technical processes. My background in
                        programming, software development, and project management equips me
                        to tackle complex challenges with creativity and precision.
                    </p>
                    <p>
                        I’m driven by a strong sense of adaptability, excellent
                        communication, and a commitment to continuous learning. I look
                        forward to the opportunity to contribute my skills to a dynamic
                        team.
                    </p>
                    <p>Thank you for your time and consideration,</p>
                    <p>Céleste Duguay</p>
                </div>
            ),
            french: (
                <div>
                    <p>À qui de droit,</p>
                    <p>
                        Je m'appelle Céleste Duguay et je suis en quatrième année
                        d'informatique à l'Université d'Ottawa avec une mineure en{" "}
                        <a 
                            href="#digital-humanities" 
                            onClick={() => this.handlePageChange("digital-humanities")}
                            className="link"
                        >
                            humanités numériques
                        </a>
                        . Je suis passionnée par l'utilisation de mes
                        compétences techniques et de mes capacités de résolution de
                        problèmes pour créer des solutions impactantes.
                    </p>
                    <p>
                        J'ai de l'expérience dans le développement de modèles prédictifs,
                        l'analyse de données et l'amélioration de la convivialité des
                        logiciels. Dans mon rôle actuel de consultante en TI, je coordonne
                        les parties prenantes, dirige les discussions sur le renouvellement
                        de contrats et optimise les processus techniques. Mon expertise en
                        programmation, développement logiciel et gestion de projet me permet
                        d’aborder des défis complexes avec créativité et précision.
                    </p>
                    <p>
                        Mon adaptabilité, mes capacités de communication et mon engagement
                        à l'apprentissage continu sont mes principaux atouts. J'ai hâte de
                        contribuer à une équipe dynamique.
                    </p>
                    <p>Merci pour votre temps et considération,</p>
                    <p>Céleste Duguay</p>
                </div>
            ),
        };

        return (
            <div className="letter">
                <div id="cover-letter">
                    {/* Language toggle button */}

                    <hr class="rounded"></hr>
                    <div className="language-toggle-container">
                        <button onClick={this.toggleLanguage} className="language-toggle">
                            {language === "english" ? "Read in French" : "Lire en anglais"}
                        </button>
                    </div>

                    {/* Display content based on the selected language */}
                    <div className="cover-letter">
                        {aboutMeContent[language]}
                    </div>
                </div>
            </div>
        );
    }
}

export default CoverLetter;
