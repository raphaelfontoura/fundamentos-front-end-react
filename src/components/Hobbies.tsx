const hobbies = ["Ler", "Aprender", "Tocar violão", "Desenhar", "Jogar videogame", "Assistir filmes"];

export const Hobbies = () => {

    const [hobbyPreferido, ...outrosHobbies] = hobbies;

    const novosHobbies = ["Cozinhar", "Viajar", "Fotografar"];

    const meusHobbies = [...outrosHobbies, ...novosHobbies];

    return (
        <>
            <p>Estes são os meus hobbies:</p>
            <ul className="list-disc pl-10">
                <li className="font-bold">{hobbyPreferido}</li>
                {meusHobbies.map((hobby, index) => (
                    <li key={`hobby-${index}`}>{hobby}</li>
                ))}
            </ul>
        </>
    );
};