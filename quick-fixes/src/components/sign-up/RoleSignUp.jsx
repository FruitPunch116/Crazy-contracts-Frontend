import { useState } from "react"
import ContractorSignUp from "./ContractorSignUp"
import ClientSignUp from "./ClientSignUp"

function RoleSignUp ({ props }) {
    
    const [showClient, setShowClient] = useState(false)
    const [showContractor, setShowContractor] = useState(false)

    function handleClientClick () {
        setShowClient(true)
        setShowContractor(false)
    }

    function handleContractorClick () {
        setShowContractor(true)
        setShowClient(false)
    }

    return(
        <div className="role-selection">

            <h3>Please choose a role.</h3>

            <div>
                <input
                type="button"
                onClick={handleClientClick}
                value="User"
                />
                {showClient? <ClientSignUp /> : null}
            </div>

            <div>
                <input
                type="button"
                onClick={handleContractorClick}
                value="Contractor"
                />
                {showContractor? <ContractorSignUp /> : null}
            </div>

            <input
            type="button"
            onClick={()=>{setShowClient (false) || setShowContractor(false)}}
            value="Back"
            />

        </div>
    )
}

export default RoleSignUp