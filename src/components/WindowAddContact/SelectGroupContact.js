import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import ButtonAdd from '../bottons/ButtonAdd'
import ButtonDelete from '../bottons/ButtonDelete'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0px',
    },
    textField: {
        margin: '0px',
    },
    phoneField: {
        margin: '0px',
    },
    selectEmpty: {
        marginRight: theme.spacing.unit * 4
    },
    formControl: {
        margin: '0px',
    },
    firstButton: {
        marginLeft: theme.spacing.unit * 4
    },
})

function SelectGroupContact(props) {
    const { classes,
            group,
            handleChange
          } = props

    return (
        <div className={classes.container}>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item xs={4}>
                    <FormControl className={classes.formControl}>
                        <Select
                            displayEmpty
                            fullWidth={true}
                            name="group"
                            className={classes.selectEmpty}
                            value={group}
                            onChange={handleChange('group')}
                        >
                            <MenuItem value={'Work'}>Work</MenuItem>
                            <MenuItem value={'Family'}>Family</MenuItem>
                            <MenuItem value={'Frends'}>Frends</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item item xs={2} className={classes.firstButton}>
                    <ButtonDelete />
                </Grid>
                <Grid item xs={2}>
                    <ButtonAdd />
                </Grid>
            </Grid>
        </div>
    )
}

SelectGroupContact.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SelectGroupContact)