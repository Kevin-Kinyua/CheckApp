

// API for adding doctor
const addDoctor = async (req,res) => {

    try {
        const { name, email, password, speciality, qualifications, experience, about, fees, hospital, address} = req.body
        const imageFile = req.imageFile

        console.log({ name, email, password, speciality, qualifications, experience, about, fees, hospital, address}, imageFile);

    }catch (error){

    }
}

export {addDoctor}