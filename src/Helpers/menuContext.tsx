import { ReactNode, createContext, useState } from 'react'

type State = boolean

type ContextType = {
    isOpen: State
    setIsOpen: any
}

export const MenuContext = createContext<ContextType>({} as ContextType)

type Props = {
    children: ReactNode
}

const MenuContextProvider = (props: Props) => {
    const [state, setState] = useState(false)

    const providerValue: ContextType = {
        isOpen: state,
        setIsOpen: setState
    }

    return (
        <MenuContext.Provider value={providerValue}>
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider