import React from 'react'

type propsTypes ={
    name: string,
    onClick: () => void ,
    className: string,
    disabled: boolean,
    active: boolean,
    href?: string,
    children?: object,
    type?: "submit"

}

export const Button = ( {name, onClick, className, disabled, active, ...attr}:propsTypes) => {

  const Tag = attr.href ? 'a' :'button';
    
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
    name: "default btn",
    onClick: () => {} ,
    className: '',
    disabled: false,
    active: false,
}


