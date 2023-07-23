import React, {useState} from 'react'
import Modal from './Modal'
import ProjectForm from './ProjectForm'
import { Plus } from 'react-bootstrap-icons'
import firebase from '../firebase'
import { userId } from "./SignIn"

function AddNewProject(){
    const [showModal, setShowModal] = useState(false)
    const [projectName, setProjectName] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        if( projectName ){
            const projectsRef = firebase.firestore().collection('projects')

            projectsRef
                .where('name', '==', projectName)
                .get()
                .then( querySnapshot => {
                    if(querySnapshot.empty){
                        projectsRef
                            .add(
                                {
                                    name : projectName,
                                    uid : userId,
                                }
                            )
                    }else{
                        alert('Project already exists!')
                    }
                },
                )
                
            setShowModal(false)
            setProjectName('')
        }
    }

    return (
        <div className='AddNewProject'>
            <div className="add-button">
                <span onClick={() => setShowModal(true)}>
                    <Plus size="20" />
                </span>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ProjectForm
                    handleSubmit={handleSubmit}
                    heading='New Category!'
                    value={projectName}
                    setValue={setProjectName}
                    setShowModal={setShowModal}
                    confirmButtonText='+ Add Category'
                />
            </Modal>
        </div>
    )
}

export default AddNewProject