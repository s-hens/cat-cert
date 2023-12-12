import { useState } from "react";

function CertText() {

    const [petName, setPetName] = useState("Pooky");

    function Button() {
        function handleClick() {
            console.log("Hello");
        }

        return (
            <button onClick={handleClick}>
              Edit
            </button>
          );
    }

    return (
        <>
        <div id="cert">
            <p>CertifiCATe of Achievement</p>
            <p>
                <span id="name">
                    Awarded to {petName} 
                </span>
                <Button />
                <input type="text" id="pet-name" value={petName} onChange={(event) => setPetName(event.target.value)}/>
            </p>
        </div>
        </>
    )
}

export default CertText;