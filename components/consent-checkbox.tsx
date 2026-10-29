"use client"

import React from "react"
import Link from "next/link"

import { Checkbox } from "@/components/ui/checkbox"
import {
  CONSENT_LINK_TEXT,
  CONSENT_TEXT_AFTER_LINK,
  CONSENT_TEXT_BEFORE_LINK,
} from "@/lib/consent"

interface ConsentCheckboxProps {
  id: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  error?: string
}

export function ConsentCheckbox({ id, checked, onCheckedChange, error }: ConsentCheckboxProps) {
  const errorId = `${id}-error`

  return (
    <div>
      <div className="flex items-start gap-3">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={(value) => onCheckedChange(value === true)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="mt-0.5"
        />
        <label htmlFor={id} className="text-sm leading-5 text-muted-foreground">
          {CONSENT_TEXT_BEFORE_LINK}
          <Link href="/privacy" target="_blank" className="text-primary underline underline-offset-2">
            {CONSENT_LINK_TEXT}
          </Link>
          {CONSENT_TEXT_AFTER_LINK}
        </label>
      </div>
      {error && (
        <p id={errorId} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
