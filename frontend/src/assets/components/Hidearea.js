import React, {useState} from 'react'
import '../sass/style.scss'



const Hidearea = () => {
    const [show, setShow] = useState(false);

    return (

        <div className="hidden-title">
            <div  className="hidden-header" onClick={() => setShow(!show)} id="wann-wird-meine-lieferung-abgeholt">Wann wird meine Lieferung
                abgeholt?
            </div>
            {
                show && <div className="hidden-collapse" >
                    <div className= "hidden-body">
                        <p>Sie finden die spezifischen Abhol- und Zustellzeiten für Ihren Transport sowohl während des
                            Buchungsprozesses auf unserer Website, als auch auf Ihrem Lieferauftrag (PDF) in Ihrem
                            E-Mail-Postfach.</p>
                    </div>
                </div>
            }

        </div>

    )
}


export default Hidearea
