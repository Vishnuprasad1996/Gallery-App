import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetail, setActiveThumbnailId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetail
  const thumbImageClass = isActive ? 'active-thumb' : 'thumb-image'

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="list-items">
      <button type="button" className="button" onClick={onClickThumbnail}>
        <img
          className={thumbImageClass}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
