import { UploadInput } from './UploadInput'
import { DragAndDrop } from './DragAndDrop'
import { Box, Container } from '@mui/material'

export const MainContent = () => {
	return (
		<DragAndDrop>
			<Container sx={{ textAlign: 'center' }}>
				<UploadInput>
					Выберите или перетащите фото для отправки
				</UploadInput>
			</Container>
		</DragAndDrop>
	)
}
