import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const DragAndDrop = ({ children }) => {
	const [highlight, setHighlight] = useState(false)
	const dispatch = useDispatch()

	const handleDragOver = (e) => {
		e.preventDefault()
		setHighlight(true)
	}

	const handleDragLeave = () => {
		setHighlight(false)
	}

	const handleDrop = (e) => {
		e.preventDefault()
		setHighlight(false)
	}

	return (
		<Box
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
			sx={{
				border: highlight && '5px dashed',
				borderColor: highlight && 'primary.main',
				margin: highlight && '20px',
				display: 'flex',
				alignItems: 'center',
				minHeight: highlight
					? 'calc(100vh - 121px)'
					: 'calc(100vh - 65px)',
			}}
		>
			{highlight ? (
				<Typography color='primary.main' fontSize='330px'>
					+
				</Typography>
			) : (
				<>{children}</>
			)}
		</Box>
	)
}
