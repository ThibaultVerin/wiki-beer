import react, { useEffect } from 'react';
import axios from 'axios';
import './PostBeer.scss';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useToasts } from 'react-toast-notifications';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    '& > *': {
      width: '25ch',
    },
  },
  formControl: {
    width: 200,
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    margin: '10px',
    marginLeft: '40px',
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#292929',
    },
    '& .MuiOutlinedInput-input': {
      color: '#292929',
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: '#292929',
    },
  },
  btn: {
    backgroundColor: '#292929',
    textTransform: '#292929',
    '&:hover': {
      backgroundColor: '#292929',
    },
  },
}));

const PostBeer = () => {
  const classes = useStyles();
  const { addToast } = useToasts();

  const { register, handleSubmit, errors, control } = useForm({
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (errors) {
      const arrayErrors = Object.values(errors);
      arrayErrors.map((error) =>
        addToast(error.message, {
          appearance: 'error',
          autoDismiss: true,
        })
      );
    }
  }, [errors]);

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/beer/', data);
      addToast('Your beer has been added to the database, thank you !', {
        appearance: 'success',
        autoDismiss: true,
      });
    } catch (err) {
      if (err.response.status === 500) {
        addToast('A mistake occured during your upload, please try later', {
          appearance: 'error',
          autoDismiss: true,
        });
      }
    }
  };

  return (
    <div className='post-beer-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Post your beer !</h1>

        <div className='input-post-form'>
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Name'
            variant='outlined'
            inputRef={register({
              required: 'Please specify a name.',
            })}
            name='name'
          />
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Brand'
            variant='outlined'
            inputRef={register({
              required: 'Please specify a brand.',
            })}
            name='brand'
          />
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Country'
            variant='outlined'
            inputRef={register({
              required: 'Please specify a country.',
            })}
            name='country'
          />
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Price'
            variant='outlined'
            inputRef={register({
              required: 'Please specify a price.',
            })}
            name='price'
          />
          <div className='input-contact-form'>
            <InputLabel>Type of beer</InputLabel>
            <Controller
              as={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <Select
                  ref={register({
                    required: 'select one option',
                  })}
                >
                  <MenuItem value='Pils'>Pils</MenuItem>
                  <MenuItem value='IPA'>IPA</MenuItem>
                  <MenuItem value='Lager'>Lager</MenuItem>
                  <MenuItem value='Porter'>Porter</MenuItem>
                  <MenuItem value='White'>White</MenuItem>
                  <MenuItem value='Porter'>Porter</MenuItem>
                  <MenuItem value='Baltic'>Baltic</MenuItem>
                  <MenuItem value='Pale Ale'>Pale Ale</MenuItem>
                </Select>
              }
              control={control}
              name='type'
              defaultValue=''
              rules={{ required: 'Merci de choisir un sujet' }}
              className={classes.input}
            />
          </div>
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Description'
            variant='outlined'
            inputRef={register({
              required: 'Please insert a name.',
            })}
            name='description'
          />
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Advice'
            variant='outlined'
            inputRef={register({
              required: 'Please insert a name.',
            })}
            name='advice'
          />
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Image (URL)'
            variant='outlined'
            inputRef={register({
              required: 'Please insert an image.',
            })}
            name='image_url'
          />
        </div>

        <div className='button-register-form'>
          <Button
            className={classes.btn}
            type='submit'
            variant='contained'
            color='primary'
          >
            Add new beer
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostBeer;
