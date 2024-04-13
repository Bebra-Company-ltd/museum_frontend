import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeToggler } from './ThemeToggler'

export const Header = () => {
	const dispatch = useDispatch()

	return (
		<AppBar position='static' color='default' elevation={1}>
			<Toolbar sx={{ flexWrap: 'wrap', paddingY: 1 }}>
				<Typography
					variant='h6'
					color='inherit'
					noWrap
					sx={{ flexGrow: 1 }}
				>
					Поиск музейных предметов
				</Typography>
				<ThemeToggler />
			</Toolbar>
			<Divider />
		</AppBar>
	)
}
