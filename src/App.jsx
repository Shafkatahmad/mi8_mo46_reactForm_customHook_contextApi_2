import './App.css'
import HookForm from './Components/HookForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StateFulForm from './Components/StateFulForm/StateFulForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('Sign Up data: ', data);
  }

  const handleUpdateProfile = data => {
    console.log('Update Profile: ', data);
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm
          formTitle={'Sign Up'}
          handleSubmit={handleSignUpSubmit}
      >
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
          formTitle={'Profile Update'}
          handleSubmit={handleUpdateProfile}
          submitBtnText="Update"
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReuseableForm>
    </>
  )
}

export default App
