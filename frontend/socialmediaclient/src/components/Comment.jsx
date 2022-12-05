import { Avatar, Grid, Paper } from "@material-ui/core";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import React from 'react';
import './Comment.css';
import { useDispatch } from "react-redux";
import { sendLiketoAuthor } from "../features/posts";
const Comment = ({data, comment, postAuthorId}) => {
    const dispatch = useDispatch()
    const imgLink = comment.author.profileImage
    const commentText = comment.comment
    const commentAuthor = comment.author.displayName
    const [commentLike, setCommentLike] = React.useState(true);
    
    const handleLike = async() => {
        
        data["comment"] = comment.id
          console.log(data)
          console.log(postAuthorId)
          const resp = await dispatch(sendLiketoAuthor(postAuthorId, data))
          if (resp?.status == 200){
            setCommentLike((prevState) => !prevState);
          }        
          // setLike(isLiked ? like - 1 : like + 1);
          // setIsLiked(!isLiked);
        };
    return (
        <>
            <Paper style={{ padding: "10px 10px", marginTop: 60 }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src={imgLink} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>{commentAuthor}</h4>
                        <p style={{ textAlign: "left" }}>
                            {commentText}
                        </p>

                        <p style={{ textAlign: "left", marginTop: 10 }}>
                            <div style={{
                                display: 'flex',
                                gap: '5px'
                            }}>
                                <ThumbUpAltIcon color="primary" />
                                <span>Michel and 26 others </span>
                            </div>

                        </p>
                        <hr />
                        <p className="commentLikeDiv">
                            <span className="commentLike" onClick={handleLike} >{commentLike ? <p>Like</p> : <p>   Dislike</p>}</span>
                        </p>
                    </Grid>
                </Grid>
            </Paper> 
        </>
    );
};

export default Comment;