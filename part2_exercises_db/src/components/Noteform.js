import React from "react"

const Noteform = ({onSubmit, newNote, handleNoteChange }) => 

<form onSubmit={onSubmit}>
        
<div>
Write something here:  
<input value={newNote}
onChange={handleNoteChange} />
</div>
<button type="submit">Send :) </button>
</form>

 






export default Noteform