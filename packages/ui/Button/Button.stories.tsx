import Button from './Button'

export const generated = () => {
  return <Button>Submit</Button>
}

export const solid = () => {
  return <Button solid>Submit</Button>
}

export const loading = () => {
  return (
    <Button solid loading>
      Submit
    </Button>
  )
}

export default { title: 'Components/UI/Button' }
