import "./FormStyle.css"
export default function Modal({isVisible, errorMessage})
{
    if(isVisible){
        return(
            <div id="modal">
                <div id="modalcontent">
                    {/*<h1>The Form Has Been Submitted Successfully</h1>*/}
                    <h1 style={{color : errorMessage ? "red" :"green" }}>{errorMessage != null ? errorMessage: "he Form Has Been Submitted Successfully"}</h1>
                </div>
            </div>
        )
    }else{
       return <></>
    }
   
}