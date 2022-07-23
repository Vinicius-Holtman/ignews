import { render, screen, fireEvent } from '@testing-library/react'
import { mocked } from 'jest-mock'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { SubscribeButton } from "."

jest.mock('next-auth/react')

jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false]
    },
    signIn: jest.fn(),
  }
})

jest.mock('next/router', () => ({
    useRouter: jest.fn().mockReturnValue({
      push: jest.fn(),
    }),
  })
)

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    render(<SubscribeButton />)

    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })

  it('redirects to posts when user already has a subscription', () => {
    const pushMocked = mocked(useRouter)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(pushMocked).toHaveBeenCalled()
  })
})