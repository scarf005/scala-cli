package scala.build.bsp

import java.io.{InputStream, OutputStream}

import scala.build.blooprifle.BloopRifleConfig
import scala.build.options.BuildOptions
import scala.build.{Inputs, Logger}
import scala.concurrent.Future

trait Bsp {
  def run(initialInputs: Inputs): Future[Unit]
  def shutdown(): Unit
}

object Bsp {
  def create(
    argsToInputs: Seq[String] => Either[String, Inputs],
    getBuildOptions: () => BuildOptions,
    logger: Logger,
    bloopRifleConfig: BloopRifleConfig,
    verbosity: Int,
    threads: BspThreads,
    in: InputStream,
    out: OutputStream
  ): Bsp =
    new BspImpl(
      logger,
      bloopRifleConfig,
      argsToInputs,
      getBuildOptions,
      verbosity,
      threads,
      in,
      out
    )
}
