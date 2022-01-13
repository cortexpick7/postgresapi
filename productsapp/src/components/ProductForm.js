import { Button, Grid, TextField, withStyles } from "@material-ui/core";
import React, {useState} from "react";
import useForm from "./useForm";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            minWidth: 200,
        }
    },
    smMargin:{
        margin: theme.spacing(2),
    }
})

const initialFieldValues = {
    productName : '',
    price : 0
}

const ProductForm = ({classes, ...props}) => {
    
    const validate =() =>{
        let temp={}
        temp.productName = values.productName?"":"This field is required"
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x=="")
    }
    
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues)

    const handleSubmit = e =>{
        e.preventDefault()
        if(validate())
        {
            window.alert('validation succeeded')
        }
    }

    return (
    <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
        <Grid container>
            <Grid item xs={6}>
                <TextField name="productName" 
                variant="outlined" 
                label="Product Name"
                value={values.productName}
                onChange={handleInputChange} 
                {...(errors.productName && {error:true, helperText:errors.productName})}
                />
                <TextField name="price" 
                variant="outlined" 
                label="Price"
                defaultValue={0}
                value={values.price}
                onChange={handleInputChange} />
                <div>
                    <Button 
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.smMargin}>
                        Submit
                    </Button>
                    <Button 
                    variant="contained"
                    color="grey"
                    className={classes.smMargin}>
                        Reset
                    </Button>
                </div>
            </Grid>
        </Grid>
    </form>
    )
}

export default withStyles(styles)(ProductForm);