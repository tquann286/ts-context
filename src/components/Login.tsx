import React, { ChangeEvent, Dispatch, useContext, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material'
import { AuthContext } from '../contexts/AuthContext'

interface LoginProps {
  isOpen: boolean,
  handleClose: Dispatch<React.SetStateAction<boolean>>
}

const Login = ({ isOpen, handleClose }: LoginProps) => {
  const [username, setUsername] = useState<string>('')

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)

  const { toggleAuth } = useContext(AuthContext)

  const onLoginSubmit = () => {
    if (username) {
      toggleAuth(username)
      setUsername('')
      handleClose(false)
    }
  }

  return (
    <Dialog open={isOpen} onClose={handleClose.bind(this, false)}>
      <DialogContent>
        <TextField label='Username' value={username} onChange={onUsernameChange} required />
      </DialogContent>
      <DialogActions>
        <Button color='primary' variant='contained' onClick={onLoginSubmit} disabled={!username}>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Login