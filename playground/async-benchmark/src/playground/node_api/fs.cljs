(ns playground.node-api.fs
  (:require [cljs.nodejs :as nodejs]))

(def ^:private fs (nodejs/require "fs"))

(defn ^:node-async rename
  [oldPath newPath callback]
  (.rename fs oldPath newPath callback))

(defn rename-sync [oldPath newPath] (.renameSync fs oldPath newPath))

(defn ^:node-async ftruncate
  [fd len callback]
  (.ftruncate fs fd len callback))

(defn ftruncate-sync [fd len] (.ftruncateSync fs fd len))

(defn ^:node-async truncate
  [path len callback]
  (.truncate fs path len callback))

(defn truncate-sync [path len] (.truncateSync fs path len))

(defn ^:node-async chown
  [path uid gid callback]
  (.chown fs path uid gid callback))

(defn chown-sync [path uid gid] (.chownSync fs path uid gid))

(defn ^:node-async fchown
  [fd uid gid callback]
  (.fchown fs fd uid gid callback))

(defn fchown-sync [fd uid gid] (.fchownSync fs fd uid gid))

(defn ^:node-async lchown
  [path uid gid callback]
  (.lchown fs path uid gid callback))

(defn lchown-sync [path uid gid] (.lchownSync fs path uid gid))

(defn ^:node-async chmod
  [path mode callback]
  (.chmod fs path mode callback))

(defn chmod-sync [path mode] (.chmodSync fs path mode))

(defn ^:node-async fchmod
  [fd mode callback]
  (.fchmod fs fd mode callback))

(defn fchmod-sync [fd mode] (.fchmodSync fs fd mode))

(defn ^:node-async lchmod
  [path mode callback]
  (.lchmod fs path mode callback))

(defn lchmod-sync [path mode] (.lchmodSync fs path mode))

(defn ^:node-async stat [path callback] (.stat fs path callback))

(defn ^:node-async lstat [path callback] (.lstat fs path callback))

(defn ^:node-async fstat [fd callback] (.fstat fs fd callback))

(defn stat-sync [path] (.statSync fs path))

(defn lstat-sync [path] (.lstatSync fs path))

(defn fstat-sync [fd] (.fstatSync fs fd))

(defn ^:node-async link
  [srcpath dstpath callback]
  (.link fs srcpath dstpath callback))

(defn link-sync [srcpath dstpath] (.linkSync fs srcpath dstpath))

(defn ^:node-async symlink
  [srcpath dstpath type callback]
  (.symlink fs srcpath dstpath type callback))

(defn symlink-sync [srcpath dstpath type]
  (.symlinkSync fs srcpath dstpath type))

(defn ^:node-async readlink
  [path callback]
  (.readlink fs path callback))

(defn readlink-sync [path] (.readlinkSync fs path))

(defn ^:node-async realpath
  [path cache callback]
  (.realpath fs path cache callback))

(defn realpath-sync [path cache] (.realpathSync fs path cache))

(defn ^:node-async unlink [path callback] (.unlink fs path callback))

(defn unlink-sync [path] (.unlinkSync fs path))

(defn ^:node-async rmdir [path callback] (.rmdir fs path callback))

(defn rmdir-sync [path] (.rmdirSync fs path))

(defn ^:node-async mkdir
  [path mode callback]
  (.mkdir fs path mode callback))

(defn mkdir-sync
  ([path] (.mkdirSync fs path nil))
  ([path mode] (.mkdirSync fs path mode)))

(defn ^:node-async readdir
  [path callback]
  (.readdir fs path callback))

(defn readdir-sync [path] (.readdirSync fs path))

(defn ^:node-async close [fd callback] (.close fs fd callback))

(defn close-sync [fd] (.closeSync fs fd))

(defn ^:node-async open
  ([path flags callback] (open path flags nil callback))
  ([path flags mode callback]
   (.open fs path flags mode callback)))

(defn open-sync [path flags mode] (.openSync fs path flags mode))

(defn ^:node-async utimes
  [path atime mtime callback]
  (.utimes fs path atime mtime callback))

(defn utimes-sync [path atime mtime]
  (.utimesSync fs path atime mtime))

(defn ^:node-async futimes
  [fd atime mtime callback]
  (.futimes fs fd atime mtime callback))

(defn futimes-sync [fd atime mtime] (.futimesSync fs fd atime mtime))

(defn ^:node-async fsync [fd callback] (.fsync fs fd callback))

(defn fsync-sync [fd] (.fsyncSync fs fd))

(defn ^:node-async write
  [fd buffer offset length position callback]
  (.write fs fd buffer offset length position callback))

#_(defn ^:node-async write
    [fd data position encoding callback]
    (.write fs fd data position encoding callback))

(defn write-sync [fd data position encoding]
  (.writeSync fs fd data position encoding))

#_(defn write-sync [fd data position encoding]
    (.writeSync fs fd data position encoding))

(defn ^:node-async read
  [fd buffer offset length position callback]
  (.read fs fd buffer offset length position callback))

(defn read-sync [fd buffer offset length position]
  (.readSync fs fd buffer offset length position))

(defn ^:node-async read-file
  [filename options callback]
  (.readFile fs filename options callback))

(defn read-file-sync [filename options]
  (.readFileSync fs filename options))

(defn ^:node-async write-file
  ([filename data callback]
   (write-file filename data nil callback))

  ([filename data options callback]
   (.writeFile fs filename data options callback)))

(defn write-file-sync [filename data options]
  (.writeFileSync fs filename data options))

(defn ^:node-async append-file
  [filename data options callback]
  (.appendFile fs filename data options callback))

(defn append-file-sync [filename data options]
  (.appendFileSync fs filename data options))

(defn watch-file [filename options listener]
  (.watchFile fs filename options listener))

(defn unwatch-file [filename listener]
  (.unwatchFile fs filename listener))

(defn watch [filename options listener]
  (.watch fs filename options listener))

(defn ^:node-async exists [path callback] (.exists fs path callback))

(defn exists-sync [path] (.existsSync fs path))

(defn ^:node-async access
  [path mode callback]
  (.access fs path mode callback))

(defn access-sync [path mode] (.accessSync fs path mode))

(defn create-read-stream [path options]
  (.createReadStream fs path options))

(defn create-write-stream [path options]
  (.createWriteStream fs path options))
