import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../store/appSlice'

export const ThemeToggler = () => {
	const dispatch = useDispatch()
	const darkMode = useSelector((state) => state.app.darkMode)

	return (
		<IconButton
			onClick={() => dispatch(setTheme(!darkMode))}
			color='inherit'
		>
			{darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
		</IconButton>
	)
}
