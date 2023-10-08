type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className='max-w-2xl mx-auto'>
      <div
        className='prose prose-neutral'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
