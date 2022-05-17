import React from 'react'
import Cause from '../../models/Cause'
const causes = (req, res) => {
    let causes: Cause[] = []
    const cause1=new Cause()
    cause1.id = 1
    cause1.titre = 'Cause 1'
    cause1.description = 'Description 1'
    cause1.image = 'Lien image 1'

    const cause2=new Cause()
    cause2.id = 2
    cause2.titre = 'Cause 2'
    cause2.description = 'Description 2'
    cause2.image = 'Lien image 2'

    causes = [cause1, cause2]
    res.status(200).json(causes)
}
export default causes