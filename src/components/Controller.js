import React from 'react'
import Link from '../containers/Link'

const Controller = () => (
  <p>
    <Link filter="SETTINGS_RESET">Reset</Link>{" "}
    <Link filter="SETTINGS_SAVE">Save</Link>{" "}
  </p>
)

export default Controller
