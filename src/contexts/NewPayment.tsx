import { createContext, useContext, useState, ReactNode } from 'react'


type PaymentMethod = {
  nome?: string
}

type NewPaymentContextType = {
  payment: PaymentMethod
  setPayment: React.Dispatch<React.SetStateAction<PaymentMethod>>
}

const NewPaymentContext = createContext<NewPaymentContextType | null>(null)

export function NewPaymentProvider({ children }: { children: ReactNode }) {
  const [payment, setPayment] = useState<PaymentMethod>({})

  return (
    <NewPaymentContext.Provider value={{ payment, setPayment }}>
      {children}
    </NewPaymentContext.Provider>
  )
}

export function useNewPayment() {
  const context = useContext(NewPaymentContext)
  if (!context) {
    throw new Error('useNewPayment deve ser usado dentro de NewPaymentProvider')
  }
  return context
}