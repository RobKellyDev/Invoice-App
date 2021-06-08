export function getInvoices() {
  let invoiceStorage: any

  if (localStorage.getItem('invoices') === null) {
    invoiceStorage = []
  } else {
    invoiceStorage = JSON.parse(localStorage.getItem('invoices') || '{}')
  }

  return invoiceStorage
}

export function deleteInvoice(id: string) {
  const invoices = getInvoices()
  invoices.forEach((invoice: { id: string }, index: number) => {
    if (invoice.id === id) {
      invoices.splice(index, 1)
    }
  })
  localStorage.setItem('invoices', JSON.stringify(invoices))
}

export function addInvoice(data: Object) {
  const invoices = getInvoices()
  invoices.push(data)
  localStorage.setItem('invoices', JSON.stringify(invoices))
}

export function changeToPaidInvoice(id: string) {
  const invoices = getInvoices()
  const invoice: { status: string }[] = invoices.filter(
    (invoice: any) => invoice.id === id
  )

  invoice[0].status = 'paid'
  localStorage.setItem('invoices', JSON.stringify(invoices))
}

export function getTheme() {
  let theme;

  if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'dark');
    theme = 'dark'
  }

  if (localStorage.getItem('theme') === 'dark') {
    theme = 'dark'
  } else if (localStorage.getItem('theme') === 'light') {
    theme = 'light'
  } else {
    localStorage.setItem('theme', 'dark');
    theme = 'dark'
  }

  return theme
}

export function storeTheme(theme: string) {
  localStorage.setItem('theme', theme)
}