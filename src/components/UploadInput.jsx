import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useState } from 'react'

export const UploadInput = ({ onChange, multiple, children }) => {
	const [selectedFile, setSelectedFile] = useState(null)

	const handleFileChange = (event) => {
		setSelectedFile(URL.createObjectURL(event.target.files[0]))
	}
	return (
		<>
			<Button
				startIcon={<CloudUploadIcon />}
				component='label'
				variant='contained'
			>
				{children}
				<input
					multiple={multiple}
					onChange={(event) => {
						handleFileChange(event)
						// onChange()
					}}
					hidden
					type='file'
				/>
			</Button>
			{selectedFile && (
				<div>
					<h2>Выбранное изображение:</h2>
					<img
						src={selectedFile}
						alt='Выбранное изображение'
						style={{ maxWidth: '300px' }}
					/>
				</div>
			)}
		</>
	)
}
