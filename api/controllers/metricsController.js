
export const addValue = async (req,res) =>{
    const {id,km,total,litres} = req.body
    console.log(id + " " + km + " " + total + " " + litres)
    res.status(200).send("value added")

}