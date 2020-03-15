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
  ButtonBase,
} from '@material-ui/core'
import {rem, mediaGrid} from '../utils/mediaGrid.js'

const A = {}

const Root = styled.div`
  && {
    margin: ${({margin}) => margin || '0'};
  }
`
A.FormGroup = styled(FormGroup)`
  && {
    margin: 1em auto;
  }
`
A.Textarea = styled.textarea`
  && {
    vertical-align: top;
    border: 1px solid #777;
    border-radius: ${rem(10)} ${rem(10)};
    padding: ${rem(10)} ${rem(20)};
    font-size: 1em;
    width: ${({width}) => width || '50%'};

    font-family: 'Gotham Light', sans-serif;
    margin: auto;
    height: 100px;
    &::placeholder {
      color: #afafaf;
    }

    &:focus {
      outline: none;
    }
  }
`

A.Input = styled(Input)`
  && {
    vertical-align: middle;
    display: inline-block;
    border: 1px solid #777;
    border-radius: ${rem(10)} ${rem(10)};
    padding: ${rem(10)} ${rem(20)};
    font-size: 1em;
    width: ${({width}) => width || '50%'};
    font-family: 'Gotham Light', sans-serif;
    margin: auto;
    &::placeholder {
      color: #afafaf;
    }

    &:focus {
      outline: none;
    }
  }
`

const BlueButton = styled(ButtonBase)`
  && {
    font-family: 'Gotham Medium', sans-serif;
    height: 46px;
    font-size: 1.15em;
    font-style: normal;
    font-stretch: normal;
    text-align: center;
    font-weight: 600;
    padding: ${rem(0)} ${rem(25)};
    background: ${({background}) => background || 'rgb(0, 90, 144)'};
    border: 3px solid transparent;
    color: #fff;
    margin: 1em auto;
  }
`

const Title = styled.div`
  && {
    color: rgba(0, 0, 0, 0.9);
    font-weight: 500;
    font-size: 2em;
    font-family: 'Paytone One', sans-serif;
    line-height: 1.1;
    margin: 0 auto 0.5em auto;
    width: ${({width}) => width || '50%'};

    text-align: ${({textAlign}) => textAlign || 'left'};
  }
`

const SubTitle = styled.div`
  && {
    color: rgba(0, 0, 0, 0.9);
    font-weight: 500;
    font-size: 1.2em;
    line-height: 1.1;
    margin: 0.5em auto 1em auto;
    width: ${({width}) => width || '50%'};

    text-align: ${({textAlign}) => textAlign || 'left'};
  }
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
              console.log('res client', res, error)
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

const Message = createField({
  name: 'message',
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
    width,
    ...userDefinedProps
  }) => (
    <A.Textarea
      id="message"
      placeholder="Leave message"
      margin="none"
      fullWidth={true}
      disableUnderline={true}
      bcolor={color}
      name={name}
      label={name}
      value={value}
      width={width}
      type="text"
      onChange={e => {
        updateField(e.target.value)
        validateField()
      }}
      required
    />
  ),
)

const Company = createField({
  name: 'company',
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
    width,
    ...userDefinedProps
  }) => (
    <A.Input
      id="company"
      placeholder="Company name"
      margin="none"
      fullWidth={true}
      disableUnderline={true}
      bcolor={color}
      name={name}
      label={name}
      value={value}
      type="text"
      width={width}
      onChange={e => {
        updateField(e.target.value)
        validateField()
      }}
      required
    />
  ),
)

const Phone = createField({
  name: 'phone',
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
    width,
    ...userDefinedProps
  }) => (
    <A.Input
      id="phone"
      placeholder="Phone number"
      margin="none"
      width={width}
      fullWidth={true}
      disableUnderline={true}
      bcolor={color}
      name={name}
      label={name}
      value={value}
      type="number"
      onChange={e => {
        updateField(e.target.value)
        validateField()
      }}
      required
    />
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
    width,
    ...userDefinedProps
  }) => (
    <A.Input
      width={width}
      id="email"
      placeholder="Work Email"
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

class ContactUsForm extends Component {
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
      body: JSON.stringify(
        Object.assign({}, data, {
          subject: `A new message received from website user`,
        }),
      ),
    })
  }

  render() {
    const {
      color = '#003d59',
      margin,
      textAlign,
      title,
      subtitle,
      width,
    } = this.props
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
          <Title width={width} textAlign={textAlign}>
            {title}
          </Title>
          <SubTitle width={width} textAlign={textAlign}>
            {subtitle}
          </SubTitle>

          <A.FormGroup row={true}>
            <Email width={width} />
          </A.FormGroup>
          <A.FormGroup row={true}>
            <Message width={width} />
          </A.FormGroup>
          <A.FormGroup row={true}>
            <Phone width={width} />
          </A.FormGroup>
          <A.FormGroup row={true}>
            <Company width={width} />
          </A.FormGroup>

          {/* <small style={{margin: `auto`, color: `green`}}>
            {(this.state.submitted && 'We will reply you shortly') || ''}
          </small> */}

          <A.FormGroup row={true}>
            <BlueButton
              type="submit"
              variant="contained"
              background={this.state.submitted ? `green` : ``}
            >
              {(this.state.submitted && 'We will reply you shortly') ||
                'Submit'}
            </BlueButton>
          </A.FormGroup>
        </Form>
      </Root>
    )
  }
}

export default ContactUsForm
