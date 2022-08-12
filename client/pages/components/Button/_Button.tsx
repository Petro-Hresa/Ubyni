import React from 'react'

type propsTypes ={
    name: string,
    onClick: () => void ,
    className: string,
    disabled: boolean,
    active: boolean,
    btn?: string,
    children?: object,
    type?: "submit"

}

export const Button = ( {name, onClick, className, disabled, active, ...attr}:propsTypes) => {

  const Tag = attr.btn ? 'button' :'a';
    
  return (
    <Tag
    {...attr}
    onClick={onClick}
    className={className}
    disabled={disabled}
    >{name}</Tag>
  )
}

Button.defaultProps ={
    name: "default link",
    onClick: () => {} ,
    className: 'text-sm-xx md:text-md leading-12 text-shadow text-secondary mobile-md:mb-20',
    disabled: false,
    active: false,
    
}


