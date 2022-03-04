import {useState, useEffect} from 'react'
import {useFirestore} from '../../hooks/useFirestore'





export default function TransactionForm({uid}) {
    const [name, setName] = useState('')
    const [amount, setAmount] =useState('')
    const { addDocument, response } = useFirestore('transactions')

    const handleSubmit = (e) => {
        //e.preventDefault is for not reloading the page when the form is being submitted
        e.preventDefault()
        addDocument({
            uid,
            name,
            amount
        })
    }

    //reset the form fields

    useEffect(() => {
        if(response.success){
            setName('')
            setAmount('')
        }
    }, [response.success])


    
    
    return (
        // //Here the fragments <> </> are used because there´s no need to output the div, 
        // but there are two elements side by side.
        <>
        <h3>Add a Transaction</h3>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Transaction name :</span>
                <input
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </label>
            <label>
                <span>Amount(€) :</span>
                <input
                    type="number"
                    required
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                />
            </label>

               <button>Add Transaction</button>


        </form>
        </>
    )
}

