import { Grid,Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles, borders   } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/productActions"
import ProductForm from "./ProductForm";

const styles = theme => ({
    root:{
        "& .MuiTableCell-head":{
            fontSize: "1.25rem",
            backgroundColor: "#add8e6",
            border: "0.05em solid black"
        },
        "& .MuiTableCell-body":{
            border: "0.1em solid black"
        }
    },

    paper : {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

const Products = ({classes, ...props}) => {
    // const [x,setX] = useState(0)
    // setX(5)

    useEffect(() => {
        props.fetchAllProducts()
    },[])

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <ProductForm />
                </Grid>
                <Grid item xs={6}>
                
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}> 
                                <TableRow>
                                    <TableCell>
                                        Name
                                    </TableCell>
                                    <TableCell>
                                        Price
                                    </TableCell>
                                    <TableCell>
                                        Date Created
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className={classes.root} >
                                {
                                    props.productList.map((record, id) => {
                                        return(<TableRow key={id} hover>
                                            <TableCell>{record.name}</TableCell>
                                            <TableCell>{record.price}</TableCell>
                                            <script>
                                                
                                            </script>
                                            <TableCell>{record.dateCreated}</TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state =>{
    return{
        productList:state.ProductReducer.list
    }
}

const mapActionToProps ={
    fetchAllProducts: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Products))


