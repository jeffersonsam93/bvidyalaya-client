import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Call from '@material-ui/icons/Call';
import Mail from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import AttachFile from '@material-ui/icons/AttachFile';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import apiQuery from '../apicall/apiQuery';
import { setSnack } from '../shell/state/actions/session';

const useStyles = makeStyles(theme => ({
  btnroot: {
  '& > *': {
      margin: theme.spacing(1),
    },
  textAlign:'center',
  },
  root: {
    maxWidth: 500,
    margin:'auto',
    textAlign:'center'
  },
  media: {
    height: 275,
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  }));
  const Contact = (props) => {
    const classes = useStyles();
    const [type, setType] = React.useState('student');
    const [selectedFile, setSelectedFile] = React.useState();
    const [base64, setBase64] = React.useState();
    const [name, setName] = React.useState();
    const [mobnumber, setMobile] = React.useState();
    const [email, setEmail] = React.useState();
    const [comments, setComments] = React.useState();
    const [helperMob, setHelperMob] = React.useState();
    const [helperName, setHelperName] = React.useState();
    const [helperEmail, setHelperEmail] = React.useState();
    const [snack, setSnack]=React.useState({});
    const handleChange = (event) => {
      setType(event.target.value);
    };
    const handlenameChange = (event) => {
      setName(event.target.value);
    };
    const handlemobChange = (event) => {
        setMobile(event.target.value);
    };
    const handleemailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlecommChange = (event) => {
      setComments(event.target.value);
    };
    const getBase64=(file)=> {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        setBase64(reader.result)
      };
      reader.onerror = function (error) {
          console.log('Error: ', error);
      };
  }
  const validateall=()=>{
    let validation=true;
    const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const phoneRegex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!name) {
      setHelperName('Name Cannot be Empty')
      validation=false;
    }
    if (email && !email.match(emailRegex)) {
      setHelperEmail('Invalid Email')
      validation=false;
    }
    if (!mobnumber) {
      setHelperMob('Mobile Number Cannot be Empty')
      validation=false;
    }
    if (mobnumber && !mobnumber.match(phoneRegex)) {
      setHelperMob('Invalid Mobile Number Format')
      validation=false;
    }
    return validation;
  }
    return (
      <div>
        <Card className={classes.root}>
            <CardContent>
              <FormControl component="fieldset">
                <RadioGroup aria-label="type" name="type" row value={type} onChange={handleChange}>
                  <FormControlLabel value="student" control={<Radio />} label="Student" />
                  <FormControlLabel value="staff" control={<Radio />} label="Staff" />
                </RadioGroup>
              </FormControl>
              <form className={classes.root} autoComplete="off">
                <div>
                  <TextField id="input-with-icon-grid" label="Name" style={{width:"100%"}}
                  value={name}
                  onChange={handlenameChange}
                  required
                  error={!!helperName && helperName.length>0}
                  helperText={helperName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }} />
                </div>
                <br/>
                <div>
                  <TextField id="input-with-icon-grid" label="Mobile Number" style={{width:"100%"}}
                  value={mobnumber}
                  onChange={handlemobChange}
                  required
                  error={!!helperMob && helperMob.length>0}
                  helperText={helperMob}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Call />
                      </InputAdornment>
                    ),
                  }} />
                </div>
                <br/>
                <div>
                  <TextField id="input-with-icon-grid" label="Email" style={{width:"100%"}}
                  value={email}
                  onChange={handleemailChange}
                  error={!!helperEmail && helperEmail.length>0}
                  helperText={helperEmail}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail />
                      </InputAdornment>
                    ),
                  }} />
                </div>
                <br/>
                <div>
                  <TextField id="input-with-icon-grid" value={comments} multiline rows={4} label="Comments" 
                  style={{width:"100%"}}
                  onChange={handlecommChange}
                  />
                </div>
                <br/>
                {selectedFile?<div>
                 <p>{selectedFile.name}</p>
                </div>:''}
                <div style={{textAlign:'right',display: 'inline-flex'}}>
                {type==='staff' ?
                (<div><input
                  accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className={classes.input}
                  id="contained-button-file"
                  type="file"
                  onChange={(evt)=>{
                    if(evt.target.files[0].size/1024/1024<5){
                      setSelectedFile(evt.target.files[0]);
                      getBase64(evt.target.files[0]);
                    } else{
                      setSnack({severity:"error",open:true,message:"Upload a file less than 5 MB"})
                    }
                   }}
                 />
                  <label htmlFor="contained-button-file">
                    <Button
                     variant="contained"
                     color="primary"
                     size="large"
                     className={classes.button}
                     startIcon={<AttachFile />}
                     type="file"
                     component="span"
                    >
                     Resume
                    </Button>
                    </label></div>):''
                }
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<Send />}
                  onClick={()=>{
                    setHelperMob('');
                    setHelperEmail('');
                    setHelperName('')
                    if(validateall()){
                      apiQuery('sendmail','','POST',{
                        details:{
                          name:name,
                          mobile:mobnumber,
                          email:email,
                          student:type==='student'?true:false,
                          comments:comments
                        },
                        attachment:selectedFile && selectedFile.name?{
                            "filename":selectedFile.name,
                            "path":base64,
                        }:null
                      }).then((res)=>{
                        setMobile('');
                        setHelperMob('');
                        setEmail('');
                        setHelperEmail('');
                        setComments('');
                        setName('');
                        setHelperName('')
                        setType('student');
                        setSelectedFile({});
                        setBase64('');
                        setSnack({severity:"success",open:true,message:"We'll reach you soon!!!"})
                      }).catch((err)=>{
                        setSnack({severity:"error",open:true,message:"Error while applying"})
                      })
                    }
                  }}
                >
                  Submit
                </Button>
                </div>
              </form>
            </CardContent>
        </Card>
        <Snackbar open={snack && snack.open} autoHideDuration={6000} onClose={()=>{setSnack(null);}}>
        <MuiAlert elevation={6} variant="filled" {...props} onClose={()=>{setSnack(null);}} severity={snack && snack.severity?snack.severity:"success"}>
          {snack && snack.message?snack.message:''}
        </MuiAlert>
      </Snackbar>
      </div>
    );
}

export default Contact;