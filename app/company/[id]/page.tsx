import { CompanyProfile } from '@/components/company-profile'

export default function CompanyProfilePage({ params }: { params: { id: string } }) {
  return <CompanyProfile companyId={params.id} />
}
