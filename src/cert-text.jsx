import { useState } from "react";

function CertText() {

    const [petName, setPetName] = useState("Pooky");
    const [editing, setEditing] = useState(0);

    function EditButton({ editing }) {
        function handleEdit(e) {
            if (!editing) {
                setEditing(1);
            } else {
                setEditing(0);
                setPetName(e.target.value);
            }
        }
        if (!editing) {
            return (
                <>
                {petName}
                <button onClick={handleEdit}>
                    Edit
                </button>
                </>
            );
        } else {
            return (
                <>
                <input type="text" id="pet-name" defaultValue={petName} onBlur={handleEdit}/>
                <button onClick={handleEdit}>
                    Save
                </button>
                </>
            )
        }
    }

    return (
        <>
        <div id="cert">
            <p>CertifiCATe of Achievement</p>
            <p>This certifies that</p>
            <p><EditButton editing={editing}/></p>
            <p>is a good boy/girl!</p>
        </div>
        </>
    )
}

export default CertText;