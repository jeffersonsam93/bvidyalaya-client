import React, { Component, useState } from "react";
//import Button from "material-ui/Button";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import dashboardStyle from './styles/dashboardStyle'
import RUG from "react-upload-gallery";
import "react-upload-gallery/dist/style.css";

const useStyles=makeStyles(theme=>{
  dashboardStyle
})
const Configuration = (props) => {
    const classes = useStyles();
    const [initialState,setInitialState]=useState([])
    return (
      <div className={classes.content}>
        <RUG 
        inOrder={true}
        autoUpload={true}
        customRequest={({
          uid,
          file,
          data, // blob
          send,
          action,
          headers,
          onProgress,
          onSuccess,
          onError
        }) => {
          const form = new FormData();
          console.log(action);
          // send file 
          form.append('file', file)
          form.append('uid',uid)
          const CancelToken = axios.CancelToken
          const source = CancelToken.source()       
  
          axios.post(
              action,
              form,
              {
                  headers: {
                      'x-access-token' : 'xxxx'
                  },
                  onUploadProgress: ({ total, loaded }) => {
                      onProgress(uid, Math.round(loaded / total * 100));
                  },
                  cancelToken: source.token
              }
          ).then(({ data: response }) => {
              onSuccess(uid, response);
          })
          .catch(error => {
              onError(uid, {
                  action,
                  status: error.request,
                  response: error.response
              })
          })
          
          return {
              abort() {
                  source.cancel()
              }
          }
        }
        }
        action="http://example.com/upload" 
        initialState={initialState} 
        type={"card"}
        onChange={(...param)=>{
          console.log(param);
        }}
        onSortEnd={(img, {oldIndex,newIndex})=>{
          console.log({img,oldIndex,newIndex})
        }}
        />
        <h1>Hold Drag and Sort Items</h1>
        <button onClick={()=>{
          console.log(initialState);
        }}>submit</button>
      </div>
    );
}

export default Configuration;
