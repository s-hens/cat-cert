import { useState } from "react";

function CertText() {

    const [petName, setPetName] = useState("Pooky");
    const [editingName, setEditingName] = useState(0);

    function EditName({ editing }) {
        function handleEditName(e) {
            if (!editingName) {
                setEditingName(1);
            } else {
                setEditingName(0);
                setPetName(e.target.value);
            }
        }
        if (!editingName) {
            return (
                <>
                {petName}
                <button onClick={handleEditName}>
                    Edit
                </button>
                </>
            );
        } else {
            return (
                <>
                <input type="text" id="pet-name" defaultValue={petName} onBlur={handleEditName}/>
                <button onClick={handleEditName}>
                    Save
                </button>
                </>
            )
        }
    }

    return (
        <>
        <EditName editingName={editingName}/>
        </>
    )
}

export default CertText;