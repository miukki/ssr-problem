import styled from 'styled-components'
import {Component} from 'react'
import {createForm, createFactory, createField} from 'micro-form'

import {
  FormGroup,
  Input,
  Button,
  SvgIcon,
  IconButton,
  Grid,
} from '@material-ui/core'
import {rem, mediaGrid} from '../utils/mediaGrid.js'

const A = {}

const Root = styled.div`
  && {
    margin: ${({margin}) => margin || '0'};
  }
`

A.Button = styled(Button)`
  && {
    vertical-align: middle;
    display: inline-block;
    border-radius: 0 ${rem(10)} ${rem(10)} 0;
    background-color: #777;
    color: #fff;
    font-size: 1em;
    padding: ${rem(13)} ${rem(20)};
    border-right: 1px solid #777;
    border-top: 1px solid #777;
    border-bottom: 1px solid #777;
    box-shadow: none;
  }
`
A.Input = styled(Input)`
  && {
    vertical-align: middle;
    display: inline-block;
    border: 1px solid #777;
    border-right: none;
    border-radius: ${rem(10)} 0 0 ${rem(10)};
    padding: ${rem(10)} ${rem(20)};
    font-size: 1em;
    width: 50%;
    height: 52px;
    font-family: 'Gotham Light', sans-serif;

    &::placeholder {
      color: #afafaf;
    }

    &:focus {
      outline: none;
    }
  }
`

const LabelCutom = styled.div`
  && {
    color: rgba(0, 0, 0, 0.9);
    font-weight: 500;
    font-size: 2em;
    font-family: 'Paytone One', sans-serif;
    line-height: 1.1;
    margin-bottom: 0.5em;
  }
`

A.Inline = styled.div`
  width: 100%;
  display: inline-block;
  margin: auto;
`
A.FormStyled = styled.form`
  && {
    text-align: center;
  }
`

const Form = createForm(
  ({
    state,
    valid,
    validateForm,
    getPayload,
    resetForm,
    children,
    submitForm,
    setState,
  }) => (
    <A.FormStyled
      autoComplete="on"
      onSubmit={e => {
        e.preventDefault()
        validateForm() &&
          submitForm(getPayload())
            .then((res, error) => {
              console.log('res!!!', res, error)
              resetForm()
              return res.status === 200 ? setState() : ''
            })
            .catch(err => console.log('error', err))
      }}
    >
      {children}
    </A.FormStyled>
  ),
)

const Email = createField({
  name: 'email',
  initialValue: '',
})(
  ({
    name,
    value,
    valid,
    updateField,
    validateField,
    validate,
    color,
    ...userDefinedProps
  }) => (
    <A.Input
      id="email"
      placeholder="Enter your email"
      margin="none"
      fullWidth={true}
      disableUnderline={true}
      bcolor={color}
      name={name}
      label={name}
      value={value}
      type="email"
      onChange={e => {
        updateField(e.target.value)
        validateField()
      }}
      required
    />
  ),
)

class SubmitFormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
    }
  }

  async submitForm(data) {
    const API = process.env.API
    return await fetch(`${API}/api/submit`, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  render() {
    const {color = '#003d59', margin} = this.props
    return (
      <Root margin={margin}>
        <Form
          color={color}
          submitForm={this.submitForm}
          setState={() => {
            this.setState({submitted: true})
            setTimeout(() => this.setState({submitted: false}), 3000)
          }}
        >
          <LabelCutom>Stay up to date. Subscribe to our newsletter.</LabelCutom>

          <FormGroup row>
            <A.Inline>
              <Email color={color} />
              <A.Button type="submit" variant="contained" bcolor={color}>
                {(this.state.submitted && 'OK') || 'OK'}
              </A.Button>
            </A.Inline>
          </FormGroup>
          <small>
            {(this.state.submitted && 'We will reply you shortly!') || ''}
          </small>
        </Form>
      </Root>
    )
  }
}

export default SubmitFormComponent
