import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './style.module.scss'
import { GoClockFill } from "react-icons/go";
import { CgImport } from "react-icons/cg";

export default function MediaCard(props) {
    const {
        img,
        alt,
        title,
        description,
    } = props
    return (
        <Card sx={{ maxWidth: 345 }} className={styles.card}>
            <CardMedia className = {styles.cardImg}

                image= {img}
                alt = {alt}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"  title= {title}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" description={description} >
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <div  className={styles.button}>
                <Button size="small"><GoClockFill /><h6>Updated 2hr ago</h6></Button>
                </div>
                <div className={styles.butto1}>
                <Button size="small"><CgImport /><h6> 835 Downloads</h6></Button>
                </div>
            </CardActions>
        </Card>
    );
}
;


//// 123